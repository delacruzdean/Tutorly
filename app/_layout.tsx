import { Stack } from "expo-router";
import NavigationBar from '@/components/NavigationBar';
import './globals.css';

export default function RootLayout() {
  return (
    <>
      <Stack>
    <Stack.Screen
          name="(tabs)"
    options={{
            headerShown: false,
          }}
    />
        <Stack.Screen
          name="jobs/[id]"
          options={{
            headerShown: false
          }}
        />
  </Stack>
      
    </>
  );
}
