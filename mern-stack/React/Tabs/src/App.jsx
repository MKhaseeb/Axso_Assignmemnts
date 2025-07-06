import React from "react";
import TabsComponent from "./components/TabsComponent";
const App = () => {
    const tabData = [
        { label: "Tab 1", content: <p>ebwipk[l];lkpjhgdfjkl;'l</p> },
        { label: "Tab 2", content: <p>ddhgjkl;'kjhgfdgfhjkli;o'p
          oiuyjhile tab</p> },
        { label: "Tab 3", content: <p>xfguyioytfdsgzfhjkl;'</p> },
    ];

    return <TabsComponent tabs={tabData} />;
};

export default App;
