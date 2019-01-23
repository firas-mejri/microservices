package com.microservice.bulletin;

import org.springframework.data.repository.CrudRepository;

public interface BulletinRepository extends CrudRepository<Bulletin, Integer> {

}
