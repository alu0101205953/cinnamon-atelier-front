import React, { useEffect, useState } from 'react';
import './OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]); // Establecemos el tipo de los pedidos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        if (response.ok) {
          const data = await response.json();
          console.log('Pedidos recibidos:', data); // Verifica lo que se recibe
          setOrders(data.orders || data); // Verifica si la respuesta es un arreglo directamente
        } else {
          setError('Error al cargar los pedidos.');
        }
      } catch (err) {
        setError('No se pudo conectar al servidor.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  
  if (loading) return <div>Cargando pedidos...</div>;
  if (error) return <div className="error-message">{error}</div>;

  // Ordenamos los pedidos por la fecha de entrega
  const sortedOrders = [...orders].sort((a, b) => new Date(b.deliveryDate) - new Date(a.deliveryDate));

  return (
    <div className="order-list">
      <h2>Lista de Pedidos</h2>
      {sortedOrders.length === 0 ? (
        <p>Aún no hay pedidos.</p>
      ) : (
        <ul>
          {sortedOrders.map((order) => (
            <li key={order.orderNumber} className="order-item">
              <p><strong>Número de pedido:</strong> {order.orderNumber}</p>
              <p><strong>Tamaño:</strong> {order.size} personas</p>
              <p><strong>Sabor:</strong> {order.flavor.replace(/-/g, ' ')}</p>
              {order.isHeartShaped && <p><strong>Forma:</strong> Corazón</p>}
              <p><strong>Precio:</strong> {order.price}€</p>
              <p><strong>Fecha de entrega:</strong> {new Date(order.deliveryDate).toISOString().split('T')[0]}</p>
              {/* Nuevos campos */}
              {order.notes && <p><strong>Notas:</strong> {order.notes}</p>}
              {order.notes && <p><strong>Inspo:</strong> {order.imageUrl}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
