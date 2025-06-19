import LeaveMessage from './LeaveMessage';
import MessageTable from './MessageTable';

export default function WelcomePage() {
  return (
    <div>
      <h1>See what people wrote about us and feel free to leave a message.</h1>
      <div>
        <MessageTable></MessageTable>
      </div>
      <div>
        <LeaveMessage></LeaveMessage>
      </div>
    </div>
  )
}



