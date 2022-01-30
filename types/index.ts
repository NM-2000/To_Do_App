import { ColorValue } from "react-native";

export type TaskProps = {
    description: string;
    finished?: boolean;
};

export type TasksCardProps = {
    title: string;
    bgColor: ColorValue;
    tasks: TaskProps[];
};

export type TasksCardsListProps = {
    cards: TasksCardProps[];
};