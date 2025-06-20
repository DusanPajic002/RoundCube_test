
import NavigateButton from '../../ui/NavigateButton';
import MessageTable from './MessageTable';

export default function WelcomePage() {
  return (
    <div>
      <h1>Guestbook</h1>
      <p>See what people wrote about us and feel free to leave a message.</p>
      <MessageTable></MessageTable>
      <hr />
      <NavigateButton root="/leaveMessagePage" text="Leave a Message"></NavigateButton>
    </div>
  )
}



