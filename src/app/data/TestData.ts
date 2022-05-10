import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData {

    static categories: Category[] = [
        { id: 1, title: 'Works'},
        { id: 2, title: 'Home'},
        { id: 3, title: 'Shopping'},
        { id: 4, title: 'Other'},
    ];

    static priorities: Priority[] = [
        { id: 1, title: 'Low', color: '#e5e5e5'},
        { id: 2, title: 'Medium', color: '#85d1b2'},
        { id: 3, title: 'High', color: '#f1828d'},
        { id: 4, title: 'Urgent', color: '#f1128d'},
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Find a job: trainee Angular Developer',
            priority: TestData.priorities[2],
            comleted: false,
            category: TestData.categories[0],
            date: new Date('2022-04-10')
        },

        {
            id: 2,
            title: 'Task 2',
            priority: TestData.priorities[0],
            comleted: false,
            category: TestData.categories[1],
            date: new Date('2022-04-11')
        },

        {
            id: 3,
            title: 'Task 3',
            priority: TestData.priorities[1],
            comleted: false,
            category: TestData.categories[2],
            date: new Date('2022-04-12')
        },

        {
            id: 4,
            title: 'Task 4',
            priority: TestData.priorities[3],
            comleted: true,
            category: TestData.categories[3],
            date: new Date('2022-04-13')
        }
    ];
}