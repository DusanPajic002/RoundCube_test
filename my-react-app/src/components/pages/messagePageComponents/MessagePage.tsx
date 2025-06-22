import { postNewMessage } from '../../../api/severApi';
import { useEffect, useState } from 'react';
import { TextInput } from '../../ui/TextInput';
import NavigateButton from '../../ui/NavigateButton';

type Status = 'idle' | 'sending' | 'success' | 'failed';

export default function MessagePage() {

  // State variables to manage the message 
  const [message, setMessage] = useState('');
  // State variable to manage the name
  const [name, setName] = useState('');
  // State variable to manage the status of the message submission
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (status === 'sending') {
      const timeout = setTimeout(() => "", 2000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim() === '' || name.trim() === '') {
      alert('Please fill in both the message and name fields.');
      return;
    }
    setStatus('sending');
    try { 
      await postNewMessage(message.trim(), name.trim());
      setStatus('success');
      setMessage('');
      setName('');
    } catch (err) {
      console.error('Error posting message:', err);
      setStatus('failed');
    }
  }

  // Function to render the status message based on the current status
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