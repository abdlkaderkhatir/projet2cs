import { format } from 'date-fns';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getSidebarLinks } from '../../../commons/sidebarLinks';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import "./styles.css"

export default function StatisiquePage() {
    const headerProps = {
        // avatarUrl: "nikolaSlika 1.jpg",
        welcomeMsg: "Dobro jutro",
        userName: "Dr. Paun",
        userTitle: "Kardiolog",
    };

    const data = [
        {
            name: 'Janvier',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'fivrier',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'mars',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'avril',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Mai',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'juin',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'juillet',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Out',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Sep',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Ovt',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 3450,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <>
            <div className="sidebar-link-container">
                <Sidebar links={getSidebarLinks("admin", 3)} />
            </div>
            <div style={{ marginLeft: "15%" }}>
                <Header
                    avatarUrl={headerProps.avatarUrl}
                    welcomeMsg={headerProps.welcomeMsg}
                    userName={headerProps.userName}
                    userTitle={headerProps.userTitle}
                    day={format(new Date(), "d")}
                    date={format(new Date(), "d MMMM, yyyy")}
                />

                <div className="components">
                    <h1>Les Statistiques</h1>
                </div>

                <div className="chart">
                    <h3 className="chartTitle">Operation analytic</h3>
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={"name"} stroke="#5550bd" />
                            <Tooltip />
                            {/* <Legend /> */}
                            {true && <Line type="monotone" dataKey={"pv"} stroke="#8884d8" activeDot={{ r: 8 }} />}
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className='chart'>
                <h3 className="chartTitle">Sexe</h3>
                <ResponsiveContainer width="100%"  aspect={4 / 1} >
                    <BarChart
                        width={500}
                        // height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey= {"name"} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={"pv"} stackId="a" fill="#8884d8" />
                        <Bar dataKey={"uv"} stackId="a" fill="#82ca9d" />
                    </BarChart>

                </ResponsiveContainer>
                </div>



            </div>

        </>
    )
}
