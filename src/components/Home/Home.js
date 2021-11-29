import { Button } from "antd"
import { Link } from "react-router-dom"
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';


const data = [
    {
      title: 'Team Member 1',
    },
    {
      title: 'Team Member 2',
    },
    {
      title: 'Team Member 3',
    },
    {
      title: 'Team Member 4',
    },
    {
      title: 'Team Member 5',
    },
    {
      title: 'Team Member 6',
    },
    {
      title: 'Team Member 7',
    },
  ];
const Home = () =>{
    return(
        <>
<h1> Welcome to the Dashboard </h1>
  <div className = 'box'>   
  
  <List className = 'list'
  
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Name :" 
           
          
        />
      </List.Item>
    )}
  />,
  </div>

        </>
    );
};
export default Home;