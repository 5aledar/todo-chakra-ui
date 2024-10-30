import { Task } from '@/utils/types';
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger
} from "@/components/ui/accordion";
import { IconButton, Box, Text } from "@chakra-ui/react";
import { LuDelete } from 'react-icons/lu';
import useTaskStore from '@/store/useTaskStore';
import { Checkbox } from "@/components/ui/checkbox"
interface Props {
  task: Task;
}

const TaskComponent = ({ task }: Props) => {
  const { removeTask, toggleTaskStatus } = useTaskStore();

  return (
    <AccordionItem value={task.id} colorPalette="black">
      <AccordionItemTrigger>
        <Box display="flex" alignItems="center" gap={2}>

          <Checkbox
            checked={task.status}
            onChange={() => toggleTaskStatus(task.id)}
            background={'white'}
          />
          <Text color={task.status ? 'green.500' : 'black'}>
            {task.title}
          </Text>
        </Box>
      </AccordionItemTrigger>

      <AccordionItemContent display="flex" justifyContent="space-between" alignItems="end">

        <Text color={'black'}>
          {task.description}
        </Text>

        <IconButton
          aria-label="Delete task"
          background="transparent"
          onClick={() => removeTask(task.id)}
        >
          <LuDelete color='black' />
        </IconButton>
      </AccordionItemContent>
    </AccordionItem>
  );
};

export default TaskComponent;
