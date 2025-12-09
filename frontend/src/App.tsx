import { useStreamStore } from "./store/useStreamStore"
import { HomeView } from "./views/HomeView"
import { BroadcasterView } from "./views/BroadcasterView"
import { ListenerView } from "./views/ListenerView"

function App() {
  const { currentUser, streamStatus } = useStreamStore()

  // Routing Logic
  if (!currentUser) {
    return <HomeView />
  }

  if (currentUser.role === 'broadcaster') {
    return <BroadcasterView />
  }

  if (currentUser.role === 'listener' && streamStatus === 'live') {
    return <ListenerView />
  }

  // Fallback for listener if stream isn't live (though mock logic handles this)
  return <HomeView />
}

export default App
