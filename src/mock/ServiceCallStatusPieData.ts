import { Colors } from "theme";

export const ServiceCallStatusPieData = [
    {
        amount: '3',
        title: "Pending",
        percentage: 60,
        color: Colors.green,
        value: 60,
        gradientCenterColor: '#006DFF',
    },
    {
        amount: '5',
        title: "Progress",
        percentage: 20,
        color: Colors.lightBlue,
        value: 20, gradientCenterColor: '#3BE9DE'
    },
    {
        amount: '2',
        title: "Completed",
        percentage: 20,
        value: 20, color: Colors.graphTransparent, gradientCenterColor: Colors.graphTransparent
    },

]