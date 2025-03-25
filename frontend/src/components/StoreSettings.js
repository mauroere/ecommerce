import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const StoreSettings = () => {
  const [store, setStore] = useState({
    name: '',
    domain: '',
    appearanceConfig: {},
  });

  useEffect(() => {
    const fetchStore = async () => {
      const response = await axios.get('/stores'); // Obtener la tienda del usuario
      if (response.data.length > 0) {
        setStore(response.data[0]); // Asumimos que el usuario tiene una tienda
      }
    };
    fetchStore();
  }, []);

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
        if (store._id) {
            await axios.put(`/stores/${store._id}`, store);
        } else {
            await axios.post('/stores', store);
        }
        alert('Store settings saved!');
    } catch (error) {
        console.error('Error saving store settings:', error);
        alert('Error saving store settings: ' + (error.response?.data?.message || error.message));
    }
};

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Store Settings</h2>
      <form>
        <div>
          <label>Store Name</label>
          <input
            type="text"
            name="name"
            value={store.name}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label>Domain</label>
          <input
            type="text"
            name="domain"
            value={store.domain}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label>Appearance Config (JSON)</label>
          <textarea
            name="appearanceConfig"
            value={JSON.stringify(store.appearanceConfig, null, 2)}
            onChange={(e) =>
              setStore({ ...store, appearanceConfig: JSON.parse(e.target.value) })
            }
            className="textarea"
          />
        </div>
        <button type="button" onClick={handleSave} className="btn btn-primary">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default StoreSettings;