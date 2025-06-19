import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postNewMessage } from '../api/severApi';

type Status = 'idle' | 'sending' | 'success' | 'failed';

const MessagePage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {

    if (message.trim() === '' || name.trim() === '') {
      alert('Please fill in both the message and name fields.');
      return;
    }

    setStatus('sending');
    setError(null);

    postNewMessage(message.trim(), name.trim())
      .then(() => {
        setStatus('success');
        setMessage('');
        setName('');
      })
      .catch((err: Error) => {
        setStatus('failed');
        setError(err.message || 'An unknown error occurred.');
      });

  };

  const renderStatusMessage = () => {
    switch (status) {
      case 'sending':
        return <p>sending...</p>;
      case 'success':
        return <p style={{ color: 'green' }}>success</p>;
      case 'failed':
        return <p style={{ color: 'red' }}>failed: {error}</p>;
      default:
        return null;
    }
  };

  const isButtonDisabled = status === 'sending';

  return (
    <div>
      <h1>Leave a Message</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Message</label><br />
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '300px' }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '300px' }}
          />
        </div>
        <br />
        <div>
          <button type="submit" disabled={isButtonDisabled}>
            Post
          </button>
        </div>
      </form>

      {renderStatusMessage()}

      <hr />
      <Link to="/">Back to Guestbook</Link>
    </div>
  );
};

export default MessagePage;