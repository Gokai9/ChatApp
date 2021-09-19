import { Text } from "@chakra-ui/layout";

const Message = ({ message, name }) => {
  return (
    <>
      {name === message.name ? (
        <Text
          borderRadius={20}
          bg="green.100"
          position="absolute"
          p={2}
          right={2}
        >
          {message.text}
        </Text>
      ) : (
        <Text
          borderRadius={20}
          bg="whitesmoke"
          position="absolute"
          p={2}
          left={4}
        >
          {message.text}
        </Text>
      )}
    </>
  );
};

export default Message;
