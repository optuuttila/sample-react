const rules = {
    user: {
      static: [
          "app:view" 
      ]
    },
    editor: {
      static: [
        "app:view",
        "app:edit"
      ]
    },
    admin: {
      static: [
        "app:view",
        "app:edit",
        "app:delete"
      ]
    }
  };
  
  export default rules;