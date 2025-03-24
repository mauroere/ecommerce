const Store = require('../models/Store');

exports.createStore = async (req, res) => {
  try {
    const { name, domain, appearanceConfig } = req.body;
    const store = new Store({
      name,
      owner: req.user.id,
      domain,
      appearanceConfig,
    });
    await store.save();
    res.status(201).json(store);
  } catch (error) {
    res.status(500).json({ message: 'Error creating store', error });
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find({ owner: req.user.id });
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stores', error });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ message: 'Error updating store', error });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    await Store.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Store deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting store', error });
  }
};