import { Button, Menu, Portal } from "@chakra-ui/react"

const Demo2 = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" borderRadius = "10px" bg = "white" h = "40px">Alibaba</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Styles</Menu.ItemGroupLabel>
              <Menu.Item value="bold">Bold</Menu.Item>
              <Menu.Item value="underline">Underline</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Separator />
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Align</Menu.ItemGroupLabel>
              <Menu.Item value="left">Left</Menu.Item>
              <Menu.Item value="middle">Middle</Menu.Item>
              <Menu.Item value="right">Right</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default Demo2