import TaskComponent from "@/components/TaskComponent/TaskComponent";
import { useState } from "react";
import { AccordionRoot } from "@/components/ui/accordion";
import useTaskStore from "@/store/useTaskStore";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Task } from "@/utils/types";

const Home = () => {
    const [addnewTask, setAddNewTask] = useState(false);
    const [newTask, setNewTask] = useState<Task>({
        id: "",
        title: "",
        description: "",
        status: false,
    });
    
    const { tasks, addTask} = useTaskStore();

    const handleOnClick = () => {
        setAddNewTask((prev) => !prev);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewTask((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddTask = () => {
        if (newTask.title && newTask.description) {
            addTask({ ...newTask, id: crypto.randomUUID() });
            setNewTask({ id: "", title: "", description: "", status: false });
            setAddNewTask(false);
        }
    };

    return (
        <Box background="gray" width="100vw" overflow="hidden" height="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" gap={5}>
            <Box>
                <AccordionRoot w={500} collapsible background="whiteAlpha.800" margin="auto" paddingInline={10} borderRadius={10} marginTop={100}>
                    {tasks.map((task) => (
                        <TaskComponent task={task} key={task.id} />
                    ))}
                </AccordionRoot>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" gap={5}>
                <Box display={addnewTask ? 'flex' : 'none'} justifyContent="space-between" gap={3} flexDirection="column" alignItems="center" background="white" width={500} padding={10} borderRadius={10}>
                    <Field label="Title">
                        <Input
                            name="title"
                            placeholder="Task title ..."
                            value={newTask.title}
                            onChange={handleOnChange}
                            required
                        />
                    </Field>
                    <Field label="Description">
                        <Textarea
                            name="description"
                            placeholder="Task description ..."
                            value={newTask.description}
                            onChange={handleOnChange}
                            required
                        />
                    </Field>
                    <Button width={150} onClick={handleAddTask}>Add</Button>
                </Box>
                <Button width={150} onClick={handleOnClick}>
                    {addnewTask ? "Close" : "Add New Task"}
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
