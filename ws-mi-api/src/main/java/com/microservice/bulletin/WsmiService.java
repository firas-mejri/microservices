package com.microservice.bulletin;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WsmiService {
	
	@Autowired
	private BulletinRepository bulletinRepository;

	public List<Bulletin> getAllBulletins() {
		
		List<Bulletin> bulletins = new ArrayList<>();
		bulletinRepository.findAll().forEach(bulletins::add);
		return bulletins;
		
	}

	public Bulletin getBulletinById(Integer id) {
		
		return bulletinRepository.findById(id).orElse(null);
	}

	public void addBulletin(Bulletin bulletin) {
		
		bulletinRepository.save(bulletin);
		
	}

	public void updateBulletin(Bulletin bulletin, Integer id) {
		
		bulletinRepository.save(bulletin);
		
	}

	public void deleteBulletin(Integer id) {
		
		bulletinRepository.deleteById(id);
		
	}

}
