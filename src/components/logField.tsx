import {
  Button,
  Field,
  Fieldset,
  Input,
  Box,
} from "@chakra-ui/react"

const LogDemo = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => {
  return (
    <form onSubmit={onSubmit}>
      <Box w = "65vw" h = "50vh"  alignSelf = "center" alignContent = "center" px="18vw">

      <Field.Root textAlign="center">
            <Field.Label alignSelf="center">Email address</Field.Label>
            <Input name="email" type="email" textAlign="center"/>
          </Field.Root>



      <Fieldset.Root  textAlign="center">
        <Fieldset.Content textAlign="center">
          <Field.Root>
            <Field.Label alignSelf="center">Password</Field.Label>
            <Input name="name" />
          </Field.Root>

         

        </Fieldset.Content>

        <Button type="submit" alignSelf="center" textAlign="center" borderRadius = "20px" bg = "#6F6CF3">
          Login
        </Button>
      </Fieldset.Root>
      </Box>
    </form>
  )
}

export default LogDemo
