
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
// import { base44 } from "@/api/base44Client";
import { FileText, LayoutDashboard, Plus, FolderOpen, User, LogOut, Settings, Handshake, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import NotificationBell from "@/components/layout/NotificationBell";

const navigationItems = [
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Hide sidebar on Landing page, public pages, or when there's a share token
  const isLandingPage = currentPageName === 'Landing' || location.pathname === createPageUrl('Landing');
  const hasShareToken = location.search.includes('token=');
  const hideSidebar = isLandingPage || hasShareToken;

  // useEffect(() => {
  //   // CRITICAL FIX: Don't try to fetch user if we have a share token
  //   // The page component will handle authentication
  //   if (hasShareToken) {
  //     console.log("[Layout] Share token detected, skipping user fetch");
  //     return;
  //   }

  //   const fetchUser = async () => {
  //     try {
  //       const userData = await base44.auth.me();
  //       setUser(userData);
  //     } catch (error) {
  //       console.error("[Layout] Error fetching user:", error);
  //       // Don't throw - just leave user as null
  //     }
  //   };
  //   fetchUser();
  // }, [location.pathname, hasShareToken]);

  // const handleLogout = () => {
  //   base44.auth.logout();
  // };

  // CRITICAL FIX: If we're on a page with a share token, render without sidebar
  if (hideSidebar) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --primary: 210 100% 12%;
          --primary-foreground: 210 40% 98%;
          --accent: 210 100% 20%;
          --accent-foreground: 210 40% 98%;
          --background: 0 0% 100%;
          --foreground: 222.2 84% 4.9%;
        }
      `}</style>
      <div className="min-h-screen flex w-full bg-slate-50">
        <Sidebar className="border-r border-slate-200 bg-white">
          <SidebarHeader className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904bfd2b3cbee331d007f27/3c0ad16c5_Logo2.JPG" 
                alt="eNDA Logo" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-xs text-slate-600">Legal Agreements</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 py-2">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-slate-100 transition-all duration-200 mb-1 ${
                          location.pathname === item.url ? 'bg-slate-900 text-white hover:bg-slate-800' : 'text-slate-700'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-4">
              <SidebarGroupLabel className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 py-2">
                Organization
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      asChild 
                      className="hover:bg-slate-100 transition-all duration-200 mb-1 text-slate-700"
                    >
                      <Link to={createPageUrl("Team")} className="flex items-center gap-3 px-4 py-3">
                        <Users className="w-5 h-5" />
                        <span className="font-medium">Team</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-200 p-4">
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start p-3 hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-slate-900 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user.full_name?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="font-medium text-slate-900 text-sm truncate">{user.full_name || 'User'}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      </div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => navigate(createPageUrl("Profile"))}>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate(createPageUrl("Settings"))}>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col bg-slate-50">
          <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 lg:hidden">
              <SidebarTrigger className="hover:bg-slate-100 p-2 transition-colors duration-200" />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904bfd2b3cbee331d007f27/3c0ad16c5_Logo2.JPG" 
                alt="eNDA Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="ml-auto">
              {user && <NotificationBell user={user} />}
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
