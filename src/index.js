import React from 'react'
import styles from './styles.module.css'

// importing components 
import Editor from './components/editor';
import Preview from './components/preview';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {
  Preview
}

export default Editor