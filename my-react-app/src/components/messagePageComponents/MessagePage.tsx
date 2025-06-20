import { Link } from 'react-router-dom';
import { postNewMessage } from '../../api/severApi';
import { useEffect, useState } from 'react';
import { TextInput } from '../ui/TextInput';
import NavigateButton from '../welcomePageComponents/NavigateButton';

type Status = 'idle' | 'sending' | 'success' | 'failed';

export default function MessagePage() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'sending') {
      const timeout = setTimeout(() => "", 2000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim() === '' || name.trim() === '') {
      alert('Please fill in both the message and name fields.');
      return;
    }
    setStatus('sending');
    setError(null);
    try { 
      await postNewMessage(message.trim(), name.trim());
      setStatus('success');
      setMessage('');
      setName('');
    } catch (err) {
      console.error('Error posting message:', err);
      setStatus('failed');
      setError('Failed to post message.');
    }
  }
  
  const renderStatusMessage = () => {
    switch (status) {
      case 'sending':
        return <p>sending...</p>;
      case 'success':
        return <p style={{ color: 'green' }}>success</p>;
      case 'failed':
        return <p style={{ color: 'red' }}>failed</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Leave a Message</h1>
      <form onSubmit={handleSubmit}>

        <TextInput
          labelText="Name"
          text={name}
          setText={setName}
        />
        <TextInput
          labelText="Message"
          text={message}
          setText={setMessage}
        />

        <div>
          <button type="submit" disabled={status === 'sending'}> Post </button>
        </div>

      </form>

      {renderStatusMessage()}

      <hr />
      <NavigateButton root="/welcomePage" text="Back to Guestbook"></NavigateButton>

    </div>
  );
};