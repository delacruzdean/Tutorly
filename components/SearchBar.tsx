import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import { icons } from '@/constants/icons';
interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search topics",
  onSearch,
  onFocus,
  onBlur,
}) => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const animatedWidth = new Animated.Value(1);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
    Animated.spring(animatedWidth, {
      toValue: 1.02,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
    Animated.spring(animatedWidth, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="px-4 my-3"
    >
      <Animated.View
        style={{ transform: [{ scale: animatedWidth }] }}
        className={`flex-row items-center bg-gray-100 rounded-full px-4 py-2 ${
          isFocused ? "bg-white shadow-md" : "bg-gray-100"
        }`}
      >
        <TextInput
          className="flex-1 text-gray-800"
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          accessibilityLabel="Search input field"
        />

        <TouchableOpacity
          onPress={handleSearch}
          accessibilityRole="button"
          accessibilityLabel="Submit search"
        >
          <Image
            source={icons.search}
            className="w-5 h-5 ml-3"
            accessibilityLabel="Search icon"
          />
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default SearchBar;
