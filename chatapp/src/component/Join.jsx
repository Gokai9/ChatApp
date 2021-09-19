import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleUser = () => {
    if (name === "" && room === "") {
      alert("Please enter the right name or room");
    }
  };
  return (
    <Flex justify="center" align="center" h={"100vh"}>
      <FormControl as="fieldset" w={400} bg="gray.300" p={12}>
        <FormLabel>Nama</FormLabel>
        <Input
          type="text"
          placeholder="Masukkan nama"
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel pt={6}>Grup</FormLabel>
        <Input
          type="text"
          placeholder="Masukkan ruang"
          onChange={(e) => setRoom(e.target.value)}
        />
        <Link onClick={handleUser} to={`/chat?name=${name}&room=${room}`}>
          <Button mt={6}>Join</Button>
        </Link>
      </FormControl>
    </Flex>
  );
};

export default Join;
