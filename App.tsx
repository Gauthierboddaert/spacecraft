import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import TermsScreen from "./src/screens/TermsScreen";
import FeedScreen from "./src/screens/FeedScreen";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedScreen />
    </QueryClientProvider>
  );
};

export default App;
