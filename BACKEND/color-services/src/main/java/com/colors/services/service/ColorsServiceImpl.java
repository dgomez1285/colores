package com.colors.services.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.colors.services.bean.Color;
import com.colors.services.dao.ColorsDAO;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor(onConstructor_ = {@Autowired})
public class ColorsServiceImpl implements ColorsService{
	
	
	
	ColorsDAO colorDAO;
	
	@Override
	public List<Color> listadoColores(Integer id) {
	
		return colorDAO.listadoColores(id);
	}
	
	
}
