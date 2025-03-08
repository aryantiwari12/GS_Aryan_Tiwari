// utils/api.ts

export const BASE_URL = "https://your-api-endpoint.com"; // Replace with your actual API URL

// Utility function for making GET requests
export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Rethrow error to be handled in the calling component
  }
};

// Utility function for making POST requests
export const postData = async <T>(endpoint: string, data: T): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error posting data: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Rethrow error to be handled in the calling component
  }
};

// Utility function for making PUT requests (update)
export const putData = async <T>(endpoint: string, data: T): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error updating data: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Rethrow error to be handled in the calling component
  }
};

// Utility function for making DELETE requests
export const deleteData = async (endpoint: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error deleting data: ${response.statusText}`);
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Rethrow error to be handled in the calling component
  }
};
