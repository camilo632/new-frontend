import './Home.scss'
import { motion } from 'framer-motion';

function Home() {

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      Contenido que se desvanece
    </motion.div>
  )
}

export default Home
