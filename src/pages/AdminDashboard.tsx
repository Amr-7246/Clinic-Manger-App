
import { MainLayout } from "@/components/layout/MainLayout";
import { DotGridBanner } from "@/components/home/DotGridBanner";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, Users, Database, Settings, 
  Calendar, BarChart3, Building, FileText 
} from "lucide-react";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const statCards = [
    { title: "Total Doctors", value: "254", icon: Users, color: "bg-blue-500" },
    { title: "Departments", value: "12", icon: Building, color: "bg-amber-500" },
    { title: "Appointments", value: "1,432", icon: Calendar, color: "bg-emerald-500" },
    { title: "Revenue", value: "$45,290", icon: BarChart3, color: "bg-purple-500" },
  ];

  return (
    <MainLayout>
      <DotGridBanner />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your clinic's data and operations</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card className="p-6 dark:border-stone-700 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{card.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                  </div>
                  <div className={`p-3 rounded-full ${card.color}`}>
                    <card.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
              <LayoutDashboard className="h-4 w-4 mr-2" /> 
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" /> 
              Users
            </TabsTrigger>
            <TabsTrigger value="departments" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
              <Building className="h-4 w-4 mr-2" /> 
              Departments
            </TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
              <Database className="h-4 w-4 mr-2" /> 
              Database
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6 dark:border-stone-700 lg:col-span-2">
                <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {['Dr. Sarah Johnson added new availability', 
                    'New appointment request from James Brown', 
                    'Surgery department updated equipment list', 
                    'Dr. Michael Wong uploaded new credentials'].map((activity, i) => (
                    <div key={i} className="flex items-center p-3 bg-muted/30 rounded-md">
                      <div className="h-2 w-2 bg-teal-500 rounded-full mr-3"></div>
                      <p>{activity}</p>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 dark:border-stone-700">
                <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Add New Doctor
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building className="mr-2 h-4 w-4" />
                    Update Department
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="users">
            <Card className="p-6 dark:border-stone-700">
              <h3 className="text-lg font-medium mb-4">Users Management</h3>
              <p className="text-muted-foreground">This section allows you to manage all users in the system.</p>
            </Card>
          </TabsContent>
          
          <TabsContent value="departments">
            <Card className="p-6 dark:border-stone-700">
              <h3 className="text-lg font-medium mb-4">Departments Management</h3>
              <p className="text-muted-foreground">This section allows you to manage all departments in the clinic.</p>
            </Card>
          </TabsContent>
          
          <TabsContent value="database">
            <Card className="p-6 dark:border-stone-700">
              <h3 className="text-lg font-medium mb-4">Database Management</h3>
              <p className="text-muted-foreground">This section allows you to manage the clinic's database and records.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
