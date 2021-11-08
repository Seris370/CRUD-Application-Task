package com.task.crud;

import com.task.crud.model.Item;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CrudApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudApplication.class, args);
    }

    @GetMapping("/hello")
    @CrossOrigin(origins = "http://localhost:3000")
    public String sayHello() {
        return "Hello World!";
    }

    @GetMapping("/items")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getText() {
        return Item.getSerializedItems();
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public String addItem(@RequestParam(name="text") String text) {
        int id = Item.addItem(text);
        return "Item added: " + id;
    }

    @PutMapping("/replace")
    @CrossOrigin(origins = "http://localhost:3000")
    public String replaceItem(@RequestParam(name="id") int id, @RequestParam(name="text") String text) {
        boolean res = Item.replaceItem(id, text);
        return res ? "Item replaced" : "Fail to replace item";
    }

    @DeleteMapping("/delete")
    @CrossOrigin(origins = "http://localhost:3000")
    public String deleteEmployee(@RequestParam(name="id") int id) {
        boolean res = Item.deleteItem(id);
        return res ? "Item deleted" : "Fail to delete item";
    }
}
