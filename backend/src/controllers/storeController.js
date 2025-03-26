const Store = require('../models/Store');

exports.createStore = async (req, res) => {
  try {
    const { name, domain, appearanceConfig } = req.body;
    const store = await Store.create({
      name,
      owner: req.user.id,
      domain,
      appearanceConfig,
    });
    res.status(201).json(store);
  } catch (error) {
    res.status(500).json({ message: 'Error creating store', error });
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.findAll({ where: { owner: req.user.id } });
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stores', error });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const store = await Store.update(req.body, {
      where: { id: req.params.id, owner: req.user.id },
      returning: true,
    });
    res.status(200).json(store[1][0]); // Retorna el registro actualizado
  } catch (error) {
    res.status(500).json({ message: 'Error updating store', error });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    await Store.destroy({ where: { id: req.params.id, owner: req.user.id } });
    res.status(200).json({ message: 'Store deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting store', error });
  }
};