import React,{useState} from 'react';
export const withHandleModal = WrappedComponent => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState(null);

    const handleSetContent = (content) => {
      setContent(content);
      return handleOnOpen()
    };

    const handleOnClose = () => {
       setIsVisible(false);
       return setContent(null)
    };

    const handleOnOpen = () => {
      return setIsVisible(true);
    };

    return <WrappedComponent
        isVisible={isVisible}
        content={content}
        onHandleContent={handleSetContent}
        onHandleClose={handleOnClose}
        onHandleOpen={handleOnOpen}
      {...props}/>
  }
};