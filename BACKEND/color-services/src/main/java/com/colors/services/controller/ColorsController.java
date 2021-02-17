package com.colors.services.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.colors.services.bean.Color;
import com.colors.services.service.ColorsService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor(onConstructor_ = {@Autowired})
@RequestMapping("/api")
public class ColorsController {
	
	
	ColorsService colorService;
	
	
	@GetMapping(value={"/colores","/colores/{id}"},produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	public List<Color> listColors(@PathVariable (required = false) Integer id) {
		
			return colorService.listadoColores(id);
		
		
	}
	
}
