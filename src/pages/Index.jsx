import React from "react";
import { Box, Container, Flex, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  const qrSize = useBreakpointValue({ base: "80%", md: "50%", lg: "30%" });

  return (
    <Container maxW="full" h="100vh" centerContent>
      <Flex h="100%" w="100%" align="center" justify="space-around" direction={{ base: "column", lg: "row" }}>
        {/* Left Side: Contact Information */}
        <Box textAlign={{ base: "center", lg: "left" }} mb={{ base: 8, lg: 0 }}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Connect with me
          </Text>
          <Link href="https://linkedin.com/in/antonosika" isExternal mb={2} display="block">
            <Flex align="center">
              <FaLinkedin />
              <Text ml={2}>linkedin.com/in/antonosika</Text>
            </Flex>
          </Link>
          <Link href="https://x.com/antonosika" isExternal>
            <Flex align="center">
              <FaTwitter />
              <Text ml={2}>x.com/antonosika</Text>
            </Flex>
          </Link>
        </Box>

        {/* Right Side: QR Code */}
        <Box boxSize={qrSize}>
          <Image src="https://i.imgur.com/PHgUd9u.png" alt="Anton Osika's QR Code" objectFit="cover" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
