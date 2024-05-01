import { motion } from "framer-motion";
export default function ScrollAnimation({ children }) {
    return (
        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}

        whileInView={{ opacity: 1, y: 0}}
    transition={{ duration: 0.4,delay: 0.0 }}
    // viewport={{ once: true }}



        >{children}</motion.div>
    );
  }
  