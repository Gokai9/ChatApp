import { Input, IconButton, HStack, Flex } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";

const In = ({ sendMessage, message, setMessage }) => {
  return (
    <Flex justify="center" alignContent="flex-end" h="100%" pt={10}>
      <HStack w={500} alignContent="center">
        <Input
          type="text"
          variant="outline"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <IconButton
          onClick={sendMessage}
          marginLeft="10px"
          colorScheme="blue"
          variant="outline"
          icon={<MdSend />}
        >
          Kirim
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default In;
