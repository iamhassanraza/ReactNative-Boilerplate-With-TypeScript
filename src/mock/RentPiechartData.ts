import { Colors } from "theme";

export const rentPieChartData = [
    {
        amount: '3000$',
        title: "Rent Paid",
        percentage: 60,
        color: Colors.green,
        gradientCenterColor: '#006DFF',
        
        value: 60,
    },
    {
        amount: '5000$',
        title: "Rent Due",
        percentage: 20,
        value: 20,
        color: Colors.lightBlue,
        gradientCenterColor: '#3BE9DE' 
    },
    {
        amount: '0',
        title: "",
        percentage: 0,
        value: 0,
        color: Colors.graphTransparent,
        gradientCenterColor: Colors.graphTransparent
    },

]