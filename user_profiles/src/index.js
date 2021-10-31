import React from "react";
import ReactDOM from 'react-dom';
import Profiles from "./profiles";
import faker from 'faker';
import ExtraContent from "./Extra";
const App = ()=>{
    
    return (
        <div className="ui center container"> 
        
            <Profiles
             pp={faker.image.avatar()}
             time={faker.address.state()}
             post={faker.image.animals()}
             name={faker.name.findName()}
             likes={faker.internet.port()}
             comments={Number(faker.commerce.price())}
             
             >
                 <ExtraContent/>
            </Profiles>
            <Profiles
             pp={faker.image.avatar()}
             time={faker.address.state()}
             post={faker.image.nightlife()}
             name={faker.name.findName()}
             likes={faker.internet.port()}
             comments={Number(faker.commerce.price())}
             >
            </Profiles>
            <Profiles
             pp={faker.image.avatar()}
             time={faker.address.state()}
             post={faker.image.sports()}
             name={faker.name.findName()}
             likes={faker.internet.port()}
             comments={Number(faker.commerce.price())}
             >
            </Profiles>
            <Profiles
             pp={faker.image.avatar()}
             time={faker.address.state()}
             post={faker.image.people()}
             name={faker.name.findName()}
             likes={faker.internet.port()}
             comments={Number(faker.commerce.price())}
             >
            </Profiles>
            <Profiles
             pp={faker.image.avatar()}
             time={faker.address.state()}
             post={faker.image.nature()}
             name={faker.name.findName()}
             likes={faker.internet.port()}
             comments={Number(faker.commerce.price())}
             >
            </Profiles>
            
          
        
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"))