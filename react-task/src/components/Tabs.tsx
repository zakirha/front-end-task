import React, { ReactElement, useState } from "react"
import TabTitle from  './TabTitle'


type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {

    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="tab-menu">
            <ul>
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        title={item.props.title}
                        index={index}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                ))}
            </ul>
 
            {children[selectedTab]}
        </div>
    )
}

export default Tabs