import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [size, setSize] = useState('2');
  const [flavor, setFlavor] = useState('');
  const [isHeartShaped, setIsHeartShaped] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [imageUrl, setImageUrl] = useState('');  // Estado para la URL de la imagen

  const prices = {
    2: 10,
    6: 20,
    8: 25,
    10: 27,
    12: 30,
    16: 35,
  };

  const isFormValid = size && flavor && deliveryDate && phoneNumber; // Asegurarse de que el teléfono esté presente

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      size,
      flavor,
      isHeartShaped,
      price: prices[size] + (isHeartShaped && (size === '2' || size === '10') ? 5 : 0),
      deliveryDate,
      phoneNumber,
      notes,
      imageUrl,  // Agregar la URL de la imagen al objeto del pedido
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const data = await response.json();
        setOrderNumber(data.order.orderNumber);
        setSuccessMessage('¡Pedido realizado exitosamente!');
        setErrorMessage('');

        // Construir enlace de correo
        const subject = `Pedido número ${data.order.orderNumber}`;
        const body = `Detalles del pedido:
        - Tamaño: ${size} personas
        - Sabor: ${flavor.replace(/-/g, ' ')}
        - Forma: ${isHeartShaped ? 'Con forma de corazón' : 'Normal'}
        - Precio: ${orderData.price}€
        - Fecha de entrega: ${deliveryDate}
        - Teléfono: ${phoneNumber}
        - Anotaciones: ${notes}
        - Inspo: ${imageUrl}
        
        Introduce tu correo aquí y envía este mensaje.`;
        const mailtoLink = `mailto:thecinnamonatelier@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Abrir el cliente de correo automáticamente
        window.location.href = mailtoLink;
      } else {
        setErrorMessage('Error al realizar el pedido.');
      }
    } catch (error) {
      setErrorMessage('Error al conectarse con el servidor.');
    }
  };

  const displayFlavor = flavor.replace(/-/g, ' ');
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="order-form">
      <div className="funny-text">¡Encarga tu tarta de manera fácil y rápida! 😊</div>
      <form onSubmit={handleSubmit} className="image-upload-form">
        <div>
          <label>Tamaño de la tarta:</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="input-field"
          >
            <option value="2">Para 2 personas</option>
            <option value="6">Para 6 personas</option>
            <option value="8">Para 8 personas</option>
            <option value="10">Para 10 personas</option>
            <option value="12">Para 12 personas</option>
            <option value="16">Para 16 personas</option>
          </select>
        </div>

        <div>
          <label>Sabor:</label>
          <select
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            className="input-field"
            required
          >
            <option value="">Selecciona un sabor</option>
            <option value="selva-negra">Selva Negra (chocolate y nata)</option>
            <option value="yuzu-chocolate-blanco">Yuzu y Chocolate Blanco</option>
            <option value="guiness">Guinness (cerveza negra y chocolate)</option>
            <option value="tarta-abuela">Tarta de la abuela</option>
          </select>
        </div>

        <div>
          <label>Fecha de entrega:</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="input-field"
            required
            min={today}
          />
        </div>

        <div>
          <label>Teléfono (Requerido):</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
            required
            pattern="^\+?[1-9]\d{1,14}$"
            placeholder="Número de teléfono"
          />
        </div>

        {(size === '2' || size === '10') && (
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="heart-shape"
              checked={isHeartShaped}
              onChange={() => setIsHeartShaped(!isHeartShaped)}
              className="input-field"
            />
            <label htmlFor="heart-shape" className="checkbox-label">
              Forma de corazón (Añadir suplemento para tarta de 2 y 10 personas)
            </label>
          </div>
        )}

        {/* Sección de anotaciones opcionales */}
        <div>
          <label>Anotaciones (Opcional):</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="input-field"
            placeholder="Escribe cualquier detalle adicional, ideas para la decoración..."
          ></textarea>
        </div>

        {/* Sección de URL de la imagen */}
        <div>
          <label>Introduce un link de imagen como idea para decorar tu tarta (Opcional):</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input-field"
            placeholder="Ejemplo: https://link-a-la-imagen.com"
          />
        </div>

        <div className="order-summary">
          <h3>Resumen del Pedido:</h3>
          <p><strong>Tamaño: </strong>{size} personas</p>
          <p><strong>Sabor: </strong>{displayFlavor}</p>
          {isHeartShaped && <p><strong>Forma de corazón (suplemento adicional)</strong></p>}
          <p>
            <strong>Precio: </strong>{prices[size] + (isHeartShaped && (size === '2' || size === '10') ? 5 : 0)}€
          </p>
          <p><strong>Fecha de entrega:</strong> {deliveryDate}</p>
          <p><strong>Teléfono:</strong> {phoneNumber}</p>
          {notes && <p><strong>Anotaciones:</strong> {notes}</p>}
        </div>

        <button type="submit" className="submit-button" disabled={!isFormValid}>
          Realizar Pedido
        </button>
      </form>

      {successMessage && (
        <div className="payment-info">
          <p>{successMessage}</p>
          <p>
            Realiza el pago por transferencia bancaria a la cuenta:{' '}
            <strong>ES12 3456 7890 1234 5678 9012</strong>
          </p>
          <p>
            Indica el número de pedido en el concepto:{' '}
            <strong>{orderNumber}</strong>
          </p>
        </div>
      )}

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default OrderForm;
