import { motion } from 'framer-motion';

function Card({ content, cardSide, isCloser }) {
  return (
    <motion.div
      whileHover={{
        scale: isCloser ? 1.02 : 1.00,
        boxShadow: isCloser
          ? '0 0 25px #E97451'
          : 'none',
        color: isCloser
          ? '#E3963E'
          : '#C0C0C0',
        }}
  transition={{ duration: 0.3 }}
  style={{
    width: `${cardSide}px`,
    height: `${cardSide}px`,
    border: isCloser ? '2.5px solid #FFAC1C' : 'none',
    borderRadius: '0.5rem',
    backgroundColor: '#282828',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    userSelect: 'none',
    overflow: 'hidden',
  }}
>
  {content}
</motion.div>

  );
}


export default Card