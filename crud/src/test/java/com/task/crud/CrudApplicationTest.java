package com.task.crud;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class CrudApplicationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void contextLoads() throws Exception {
        this.mockMvc.perform(get("/hello")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("Hello World!")));
    }

    @Test
    public void testPost() throws Exception {
        this.mockMvc.perform(post("/add?text=target")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("Item added")));
    }

    @Test
    public void testPut() throws Exception {
        this.mockMvc.perform(post("/add?text=target"));
        this.mockMvc.perform(put("/replace?id=0&text=new")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("Item replaced")));
    }

    @Test
    public void testDeleted() throws Exception {
        this.mockMvc.perform(post("/add?text=target"));
        this.mockMvc.perform(delete("/delete?id=0")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("Item deleted")));
    }

    @Test
    public void testGet() throws Exception {
        this.mockMvc.perform(post("/add?text=target"));
        this.mockMvc.perform(get("/items")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("target")));
    }
}
