import Seo from "../../components/seo";
import { useSelector } from "react-redux";
import { TabView, TabPanel } from "primereact/tabview";
import AddPlayList from "../../components/adminTabs/AddPlayList";
import AddCollection from "../../components/adminTabs/AddCollection";
import ManageCollection from "../../components/adminTabs/ManageCollection";
import ManagePlaylist from "../../components/adminTabs/ManagePlaylist";

const Admin = () => {
  const user = useSelector((state) => state.initialState.user);
  const scrollableTabs = [
    { title: `Add Collection`, content: <AddCollection user={user} /> },
    { title: `Add Playlist/Video`, content: <AddPlayList user={user} /> },
    { title: `Manage Collection`, content: <ManageCollection user={user} /> },
    { title: `Manage Playlist/Video`, content: <ManagePlaylist user={user} /> },
  ];

  return (
    <>
      <Seo pageTitle="Admin" />
      <TabView scrollable>
        {scrollableTabs.map((tab) => {
          return (
            <TabPanel key={tab.title} header={tab.title}>
              {tab.content}
            </TabPanel>
          );
        })}
      </TabView>{" "}
    </>
  );
};

export default Admin;
