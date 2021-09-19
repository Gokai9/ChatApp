import { Container, Flex, Text } from "@chakra-ui/react";

const Header = ({ name, room }) => {
  return (
    <Container maxHeight="40px">
      <Flex justify="space-around" backgroundColor="gray">
        <Text fontSize="2xl">{name}</Text>
        <Text fontSize="2xl">{room}</Text>
      </Flex>
    </Container>
  );
};

export default Header;
