import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings, LogIn } from "lucide-react";
import "../../styles/app-sidebar.css";
import { NavUser } from "./app-NavUser";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Login",
    url: "/login",
    icon: LogIn,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-accent/40">
        <SidebarGroup className="font-bold gap-2">
          <SidebarGroupLabel className="label text-primary font-extrabold flex justify-center mb-2 text-2xl">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className="menuItem mt-4 shadow-md shadow-primary rounded-lg hover:bg-sidebar-primary-foreground hover:shadow-lg hover:transition-all hover:shadow-contrastCopper hover:text-lg bg-accent/10"
                  key={item.title}
                >
                  <SidebarMenuButton className="sbButton" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-accent/40 text-white">
        <NavUser user={{ name: "John Dorian", email: "jd@example.com", avatar: "path/to/avatar.png" }} />
      </SidebarFooter>
    </Sidebar>
  );
}
