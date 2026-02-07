// Mock API for BorrowBox

// Mock register function
export const registerUser = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "success", user: { id: 1, name: data.name, email: data.email } });
    }, 500);
  });
};

// Mock login function
export const loginUser = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "success", user: { id: 1, name: "John Doe", email: data.email } });
    }, 500);
  });
};

// Mock get current user function
export const getCurrentUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe", email: "johndoe@example.com" });
    }, 500);
  });
};
