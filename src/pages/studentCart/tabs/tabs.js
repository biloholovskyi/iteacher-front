import React, {useState} from 'react'

import TabCourses from "./tabCourses/tabCourses";
import TabNotes from "./tabNotes/tabNotes";

import * as Style from './styled.js'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('courses')

  const changeTab = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Style.TabsHead>
        <div
          className={`tabs ${activeTab === 'courses' && 'active'}`}
          onClick={() => changeTab('courses')}
        >
          Курсы
        </div>
        <div
          className={`tabs ${activeTab === 'notes' && 'active'}`}
          onClick={() => changeTab('notes')}
        >
          Заметки
        </div>
      </Style.TabsHead>

      {
        activeTab === 'courses' ? <TabCourses/> : <TabNotes/>
      }
    </>
  )
}

export default Tabs