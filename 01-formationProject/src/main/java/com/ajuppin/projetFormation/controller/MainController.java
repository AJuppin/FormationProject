package com.ajuppin.projetFormation.controller;

import com.ajuppin.projetFormation.entity.User;
import com.ajuppin.projetFormation.entity.UserType;
import com.ajuppin.projetFormation.repository.UserRepository;
import com.ajuppin.projetFormation.repository.UserTypeRepository;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserTypeRepository userTypeRepository;

    @PostMapping("/users")
      public void saveUser(@RequestBody User user) {
        if (user.getUserType() != null ) {
            UserType attachedUserType = userTypeRepository.findById(user.getUserType().getId())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid UserType ID"));
            user.setUserType(attachedUserType);
        }
        // Sauvegardez l'utilisateur
        User savedUser =
        userRepository.save(user);

    }

    @GetMapping("/users")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            // we didn't find the employee
            throw new RuntimeException("Did not find userType id - " + id);
        }
    }

    @DeleteMapping("/users/{id}")
    public void deleteUserById(@PathVariable int id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.delete(user.get());
        } else {
            // we didn't find the employee
            throw new RuntimeException("Did not find user id - " + id);
        }
    }





    @PostMapping("/userType")
    void addUserType(@RequestBody UserType userType) {
        userTypeRepository.save(userType);
    }

    @GetMapping("/userType")
    public @ResponseBody Iterable<UserType> getAllUsersType() {
        return userTypeRepository.findAll();
    }

    @GetMapping("/userType/{id}")
    public ResponseEntity<UserType> getUserTypeById(@PathVariable int id) {
        Optional<UserType> userType = userTypeRepository.findById(id);
        if (userType.isPresent()) {
            return new ResponseEntity<>(userType.get(), HttpStatus.OK);
        } else {
            // we didn't find the employee
            throw new RuntimeException("Did not find userType id - " + id);
        }
    }


    @DeleteMapping("/userType/{id}")
    public void deleteUserTypeById(@PathVariable int id) {
        Optional<UserType> userType = userTypeRepository.findById(id);

        if (userType.isPresent()) {

            List<User> users = userRepository.findAll();
            for (User tempUser : users) {
                if (tempUser.getUserType().getId() == id) {
                    tempUser.setUserType(null);}}

                    userTypeRepository.delete(userType.get());
                } else {
                    // we didn't find the employee
                    throw new RuntimeException("Did not find userType id - " + id);
                }
            }

}
