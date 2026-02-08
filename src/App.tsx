import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Page1Opening from './pages/Page1Opening'
import Page2DoYouWanna from './pages/Page2DoYouWanna'
import Page3Warning from './pages/Page3Warning'
import Page4Envelope from './pages/Page4Envelope'
import Page5Letter from './pages/Page5Letter'
import Page6Choose from './pages/Page6Choose'
import Page7Roses from './pages/Page7Roses'
import Page8Memories from './pages/Page8Memories'
import Page9Presentation from './pages/Page9Presentation'
import Page10Final from './pages/Page10Final'
import { Toaster } from './components/ui/toaster'
import { MusicPlayer } from './components/ui/music-player'

function AutoRedirect() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/page1')
  }, [navigate])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <MusicPlayer />
      <Toaster />
      <Routes>
        <Route path="/" element={<AutoRedirect />} />
        <Route path="/page1" element={<Page1Opening />} />
        <Route path="/page2" element={<Page2DoYouWanna />} />
        <Route path="/page3" element={<Page3Warning />} />
        <Route path="/page4" element={<Page4Envelope />} />
        <Route path="/page5" element={<Page5Letter />} />
        <Route path="/page6" element={<Page6Choose />} />
        <Route path="/roses" element={<Page7Roses />} />
        <Route path="/memories" element={<Page8Memories />} />
        <Route path="/presentation" element={<Page9Presentation />} />
        <Route path="/final" element={<Page10Final />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
