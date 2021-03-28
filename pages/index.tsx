import {
  Box,
  Button,
  Stack,
  Wrap,
  WrapItem,
  Avatar,
  Tooltip,
  Link,
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { FiType, FiLinkedin, FiGithub } from 'react-icons/fi'
import React from 'react'

export const Home = (): JSX.Element => (
  <div className="container">
    <Wrap>
      <WrapItem>
        <Avatar
          size="2xl"
          name="a45b"
          margin={10}
          src="https://avatars.githubusercontent.com/u/1850968?v=4"
        />
      </WrapItem>
    </Wrap>

    <Box bg="tomato" w="100%" p={4} color="white">
      <Heading
        as="h1"
        size="4xl"
        display="flex"
        fontWeight="normal"
        alignItems="center"
        justifyContent="center"
        fontFamily="'Lovers Quarrel', cursive"
      >
        Kamal Dev
      </Heading>
    </Box>

    <Stack direction="row" spacing={4} marginTop={10}>
      <Tooltip label="Blog" fontSize="md">
        <Link href="https://medium.com/@kamal-dev" isExternal>
          <Button colorScheme="teal" variant="outline">
            <FiType />
          </Button>
        </Link>
      </Tooltip>

      <Tooltip label="Github" fontSize="md">
        <Link href="https://github.com/a45b" isExternal>
          <Button colorScheme="teal" variant="outline">
            <FiGithub />
          </Button>
        </Link>
      </Tooltip>

      <Tooltip label="Linkedin" fontSize="md">
        <Link href="https://www.linkedin.com/in/k-a-m-a-l-d-e-v" isExternal>
          <Button colorScheme="teal" variant="outline">
            <FiLinkedin />
          </Button>
        </Link>
      </Tooltip>
    </Stack>
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
