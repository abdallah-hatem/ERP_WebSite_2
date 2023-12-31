import { HoverCard, Text, Group } from "@mantine/core";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { TitleColor } from "../../../Styles/Colors";

function InformationButton({ text }) {
   return (
      <Group position="center">
         <HoverCard width={280} shadow="md">
            <HoverCard.Target>
               {/* <Button>Hover to reveal the card</Button> */}
               {/* <i class="fas fa-info"></i> */}
               <div>
                  <FaInfoCircle color={TitleColor} size={"25px"} />
               </div>
            </HoverCard.Target>
            <HoverCard.Dropdown>
               <Text size="sm">{text}</Text>
            </HoverCard.Dropdown>
         </HoverCard>
      </Group>
   );
}

export default InformationButton;
